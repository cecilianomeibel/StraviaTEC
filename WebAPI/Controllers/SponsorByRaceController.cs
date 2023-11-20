using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;
namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SponsorByRaceController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public SponsorByRaceController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        //Create 
        [HttpPost]
        public async Task<IActionResult> CreateSponsorByRace([FromBody] SponsorByRace sponsorByRace)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPONSOR_BY_RACE";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            new SqlParameter("@idRace", sponsorByRace.idRace),
            new SqlParameter("@sponsorName", sponsorByRace.sponsorName)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
        //Get race by  sponsor
        [HttpGet("BySponsor/{sponsorName}")]
        public async Task<IActionResult> GetRaceBySponsor(string sponsorName)
        {
            // Ensure the name of the stored procedure is correct
            string storedProcedureName = "SP_SPONSOR_BY_RACE";

            // Create the parameters for the stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@sponsorName", sponsorName)
            };

            // Execute the stored procedure and retrieve the list of SportmanByChallengeModel objects
            List<SponsorByRace> sponsorByRace = await _sqlServerConnector.ExecuteStoredProcedureListAsync<SponsorByRace>(storedProcedureName, parameters);

            // Return the list of challenges
            return Ok(sponsorByRace);
        }

        //Get sponsorName by idRace
        [HttpGet("ByRace/{idRace}")]
        public async Task<IActionResult> GetSponsorByRace(int idRace)
        {
            // Ensure the name of the stored procedure is correct
            string storedProcedureName = "SP_SPONSOR_BY_RACE";

            // Create the parameters for the stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadUsernames"),
            new SqlParameter("@idRace", idRace)
            };

            // Execute the stored procedure and retrieve the list of SportmanByChallengeModel objects
            List<SponsorByRace> sponsorByRace = await _sqlServerConnector.ExecuteStoredProcedureListAsync<SponsorByRace>(storedProcedureName, parameters);

            // Return the list of challenges
            return Ok(sponsorByRace);
        }


    }
}
