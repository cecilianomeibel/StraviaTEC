using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public FeedController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet("{username}")]
        public async Task<IActionResult> GetFeed(string username)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_FEED";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@username", username)
            };

            List<Activity> feed = await _sqlServerConnector.ExecuteStoredProcedureListAsync<Activity>(storedProcedureName, parameters);

            return Ok(feed);
        }
    }
}
