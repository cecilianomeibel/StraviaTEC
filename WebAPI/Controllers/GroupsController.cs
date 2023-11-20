using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {

        private readonly SqlServerConnector _sqlServerConnector;

        public GroupsController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAGroups()
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_GROUPS_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "ReadAll"),
            };

            // Ejecuta el stored procedure y devuelve la lista de Groups
            List<Groups> activity = await _sqlServerConnector.ExecuteStoredProcedureListAsync<Groups>(storedProcedureName, parameters);
            return Ok(activity);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGroupByName(string name)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_GROUPS_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "ReadOnlyOne"),
                new SqlParameter("@name", name)
            };

            // Ejecuta el stored procedure y devuelve la Activity con el id proporcionado
            Groups groups = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<Groups>(storedProcedureName, parameters);

            if (groups == null)
            {
                return NotFound();
            }
            return Ok(groups);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroup([FromBody] Groups group)
        {
            string storedProcedureName = "SP_GROUPS_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "Create"),
                new SqlParameter("@name", group.name),
                new SqlParameter("@idSportman", group.idSportman)
            };


            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);

            return Ok();
        }



        [HttpPut("{name}")]
        public async Task<IActionResult> UpdateGraoup(string name, [FromBody] Groups group)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_GROUPS_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {

                new SqlParameter("@statementType", "Update"),
                new SqlParameter("@name", group.name),
                new SqlParameter("@@idSportman", group.idSportman) 
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSportman(string name)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_GROUPS_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Delete"),
            new SqlParameter("@name", name)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
    }
}
