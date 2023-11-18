using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RaceController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public RaceController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        //Create Race
        [HttpPost]
        public async Task<IActionResult> CreateRace([FromBody] Race race)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_RACE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            new SqlParameter("@idActivity", race.idActivity),
            new SqlParameter("@activityType", race.activityType),
            new SqlParameter("@cost", race.cost),
            new SqlParameter("@bankAccount", race.bankAccount),
            new SqlParameter("@name", race.name),
            new SqlParameter("@access", race.access)

            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
        //Get All Races
        [HttpGet]
        public async Task<IActionResult> GetAllRaces()
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_RACE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadAll"),
            };

            // Ejecuta el stored procedure y devuelve la lista de Sportmen
            List<Race> races = await _sqlServerConnector.ExecuteStoredProcedureListAsync<Race>(storedProcedureName, parameters);
            return Ok(races);
        }

        //Get Race by ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRaceByID(int id)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_RACE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@id", id)
            };

            // Ejecuta el stored procedure y devuelve el Race con el id proporcionado
            Race race = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<Race>(storedProcedureName, parameters);

            if (race == null)
            {
                return NotFound();
            }
            return Ok(race);
        }

        //Update Race
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRace(int id, [FromBody] Race race)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_RACE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Update"),
            new SqlParameter("@id", race.id),
            new SqlParameter("@idActivity", race.idActivity),
            new SqlParameter("@activityType", race.activityType),
            new SqlParameter("@cost", race.cost),
            new SqlParameter("@bankAccount", race.bankAccount),
            new SqlParameter("@name", race.name),
            new SqlParameter("@access", race.access)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        //Delete Race
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRace(int id)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_RACE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Delete"),
            new SqlParameter("@id", id)
            };
            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }


    }
}




