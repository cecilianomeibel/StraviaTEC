using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;
namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SponsorByChallengeController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public SponsorByChallengeController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        //Create
        [HttpPost]
        public async Task<IActionResult> CreateSponsorByChallengee([FromBody] SponsorByChallenge sponsorByChallenge)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPONSOR_BY_CHALLENGE";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            new SqlParameter("@idChallenge", sponsorByChallenge.idChallenge),
            new SqlParameter("@sponsorName", sponsorByChallenge.sponsorName),
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
        //Get challenge by sponsor
        [HttpGet("BySponsor/{sponsorName}")]
        public async Task<IActionResult> GetChallengeBySponsor(string sponsorName)
        {
            // Ensure the name of the stored procedure is correct
            string storedProcedureName = "SP_SPONSOR_BY_CHALLENGE";

            // Create the parameters for the stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@sponsorName", sponsorName)
            };

            // Execute the stored procedure and retrieve the list of SportmanByChallengeModel objects
            List<SponsorByChallenge> sponsorByChallenge = await _sqlServerConnector.ExecuteStoredProcedureListAsync<SponsorByChallenge>(storedProcedureName, parameters);

            // Return the list of challenges
            return Ok(sponsorByChallenge);
        }

        //Get sponsor by idChallenge
        [HttpGet("ByChallenge/{idChallenge}")]
        public async Task<IActionResult> GetSponsorByChallenge(int idChallenge)
        {
            // Ensure the name of the stored procedure is correct
            string storedProcedureName = "SP_SPONSOR_BY_CHALLENGE";

            // Create the parameters for the stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadUsernames"),
            new SqlParameter("@idChallenge", idChallenge)
            };

            // Execute the stored procedure and retrieve the list of SportmanByChallengeModel objects
            List<SponsorByChallenge> sponsorByChallenge = await _sqlServerConnector.ExecuteStoredProcedureListAsync<SponsorByChallenge>(storedProcedureName, parameters);

            // Return the list of challenges
            return Ok(sponsorByChallenge);
        }


    }
}
