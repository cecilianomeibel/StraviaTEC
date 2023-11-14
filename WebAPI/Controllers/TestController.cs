using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public TestController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sportsman>>> GetAllSportman()
        {
            string query = "SELECT * FROM SPORTMAN";
            var result = await _sqlServerConnector.ExecuteQueryListAsync<Sportsman>(query);


            return Ok(result);
        }

        [HttpGet("ByUsername")]
        public async Task<ActionResult<IEnumerable<Sportsman>>> GetSportman(string username)
        {
            string storedProcedureName = "SP_SPORTMAN_BY_USERNAME";
            SqlParameter[] parameters = {
                new SqlParameter("@username", username)
                };

            var result = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<Sportsman>(storedProcedureName, parameters);

            return Ok(result);
        }

    }
}
