using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Utils;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityByChallengeController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public ActivityByChallengeController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllActivityByChallenge()
        {
            string storedProcedureName = "SP_ACTIVITY_BY_CHALLENGE_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "ReadAll"),
                new SqlParameter("@idActivity", DBNull.Value),
                new SqlParameter("@idChallenge", DBNull.Value)
            };

            List<ActivityByChallenge> activities = await _sqlServerConnector.ExecuteStoredProcedureListAsync<ActivityByChallenge>(storedProcedureName, parameters);
            return Ok(activities);
        }

        [HttpGet("{idActivity}/{idChallenge}")]
        public async Task<IActionResult> GetActivityById(int idActivity, int idChallenge)
        {
            string storedProcedureName = "SP_ACTIVITY_BY_CHALLENGE_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "ReadOnlyOne"),
                new SqlParameter("@idActivity", idActivity),
                new SqlParameter("@idChallenge", idChallenge)
            };

            ActivityByChallenge activityByChallenge = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<ActivityByChallenge>(storedProcedureName, parameters);

            if (activityByChallenge == null)
            {
                return NotFound();
            }

            return Ok(activityByChallenge);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity([FromBody] ActivityByChallenge activityByChallenge)
        {
            string storedProcedureName = "SP_ACTIVITY_BY_CHALLENGE_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "Create"),
                new SqlParameter("@idActivity", activityByChallenge.idActivity),
                new SqlParameter("@idChallenge", activityByChallenge.idChallenge)
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpPut("{idActivity}/{idChallenge}")]
        public async Task<IActionResult> UpdateActivity(int idActivity, int idChallenge, [FromBody] ActivityByChallenge activityByChallenge)
        {
            string storedProcedureName = "SP_ACTIVITY_BY_CHALLENGE_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "Update"),
                new SqlParameter("@idActivity", idActivity),
                new SqlParameter("@idChallenge", idChallenge),
                new SqlParameter("@newIdActivity", activityByChallenge.idActivity),
                new SqlParameter("@newIdChallenge", activityByChallenge.idChallenge)
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpDelete("{idActivity}/{idChallenge}")]
        public async Task<IActionResult> DeleteActivity(int idActivity, int idChallenge)
        {
            string storedProcedureName = "SP_ACTIVITY_BY_CHALLENGE_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "Delete"),
                new SqlParameter("@idActivity", idActivity),
                new SqlParameter("@idChallenge", idChallenge)
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
    }
}
