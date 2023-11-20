using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;
namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SportmanSignedRaceController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public SportmanSignedRaceController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        //Create
        [HttpPost]
        public async Task<IActionResult> CreateSportmanByChallenge([FromBody] SportmanSignedRace sportmanSignedRace)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPORTMAN_BY_RACE";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            new SqlParameter("@idRace", sportmanSignedRace.idRace),
            new SqlParameter("@usernameSportman", sportmanSignedRace.usernameSportman),
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
        //Get challenge by username
        [HttpGet("{usernameSportman}")]
        public async Task<IActionResult> GetChallengeBySportman(string usernameSportman)
        {
            // Ensure the name of the stored procedure is correct
            string storedProcedureName = "SP_SPORTMAN_BY_RACE";

            // Create the parameters for the stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@usernameSportman", usernameSportman)
            };

            // Execute the stored procedure and retrieve the list of SportmanByChallengeModel objects
            List<SportmanSignedRace> sportmanSignedRace = await _sqlServerConnector.ExecuteStoredProcedureListAsync<SportmanSignedRace>(storedProcedureName, parameters);

            // Return the list of challenges
            return Ok(sportmanSignedRace);
        }


    }
}
