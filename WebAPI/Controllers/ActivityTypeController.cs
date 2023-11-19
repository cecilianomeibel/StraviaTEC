using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityTypeController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public ActivityTypeController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllActivityTypes()
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_ACTIVITY_TYPE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadAll")
            };

            // Ejecuta el stored procedure y devuelve la lista de Activity
            List<ActivityType> activityType = await _sqlServerConnector.ExecuteStoredProcedureListAsync<ActivityType>(storedProcedureName, parameters);
            return Ok(activityType);
        }

     
        [HttpPost]
        public async Task<IActionResult> CreateActivityType([FromBody] ActivityType activityType)
        {
            string storedProcedureName = "SP_ACTIVITY_TYPE_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "Create"),
                new SqlParameter("@name", activityType.name)
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }


        [HttpDelete("{name}")]
        public async Task<IActionResult> DeleteActivityType(string name)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_ACTIVITY_TYPE_CRUD";

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
