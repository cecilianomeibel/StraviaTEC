using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SportmanController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public SportmanController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpPost]
        public async Task<IActionResult> CreateSportman([FromBody] Sportman sportman)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPORTMAN_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            new SqlParameter("@username", sportman.username),
            new SqlParameter("@name", sportman.name),
            new SqlParameter("@lastname1", sportman.lastname1),
            new SqlParameter("@lastname2", sportman.lastname2),
            new SqlParameter("@birthDate", sportman.birthDate),
            new SqlParameter("@nationality", sportman.nationality),
            new SqlParameter("@password", sportman.password),
            new SqlParameter("@picture", sportman.picture)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSportmen()
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPORTMAN_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadAll"),
            new SqlParameter("@username", DBNull.Value)  // Agrega un parámetro @username con un valor predeterminado
            };

            // Ejecuta el stored procedure y devuelve la lista de Sportmen
            List<Sportman> sportmen = await _sqlServerConnector.ExecuteStoredProcedureListAsync<Sportman>(storedProcedureName, parameters);
            return Ok(sportmen);
        }

        [HttpGet("{username}")]
        public async Task<IActionResult> GetSportmanByUsername(string username)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPORTMAN_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@username", username)
            };

            // Ejecuta el stored procedure y devuelve el Sportman con el username proporcionado
            Sportman sportman = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<Sportman>(storedProcedureName, parameters);

            if (sportman == null)
            {
                return NotFound();
            }
            return Ok(sportman);
        }

        [HttpPut("{username}")]
        public async Task<IActionResult> UpdateSportman(string username, [FromBody] Sportman sportman)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPORTMAN_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Update"),
            new SqlParameter("@username", username),
            new SqlParameter("@name", sportman.name),
            new SqlParameter("@lastname1", sportman.lastname1),
            new SqlParameter("@lastname2", sportman.lastname2),
            new SqlParameter("@birthDate", sportman.birthDate),
            new SqlParameter("@nationality", sportman.nationality),
            new SqlParameter("@password", sportman.password),
            new SqlParameter("@picture", sportman.picture)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpDelete("{username}")]
        public async Task<IActionResult> DeleteSportman(string username)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPORTMAN_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Delete"),
            new SqlParameter("@username", username)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
    }
}
