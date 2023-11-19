using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public PostController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }



        [HttpPost]
        public async Task<IActionResult> CreateFPost([FromBody] Post post)
        {
            string storedProcedureName = "SP_POST_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "CREATE"),
                new SqlParameter("@idSportman", post.idSportman),
                new SqlParameter("@activityType", post.activityType),
                new SqlParameter("@dateAndTime", post.dateAndTime),
                new SqlParameter("@mileage", post.mileage),
                new SqlParameter("@gpx", post.gpx),
                new SqlParameter("@eventType", post.eventType),
                new SqlParameter("@duration", post.duration)
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
    }
}
