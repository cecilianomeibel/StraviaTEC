using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;
namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SportmanByChallengeController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public SportmanByChallengeController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet("{usernameSportman}")]
        public async Task<IActionResult> GetChallengeBySportman(string usernameSportman)
        {
            // Ensure the name of the stored procedure is correct
            string storedProcedureName = "SP_GET_CHALLENGEID_BY_SPORTMAN";

            // Create the parameters for the stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@usernameSportman", usernameSportman)
            };

            // Execute the stored procedure and retrieve the list of challenge IDs
            List<int> challengeIDs = await _sqlServerConnector.ExecuteStoredProcedureListAsync<int>(storedProcedureName, parameters);

            // Return the list of challenge IDs
            return Ok(challengeIDs);
        }
    }
}
