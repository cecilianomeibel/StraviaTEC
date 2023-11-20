using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;
namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryByRaceController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public CategoryByRaceController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        //Create categorybyrace
        [HttpPost]
        public async Task<IActionResult> CreateSportmanSignedRace([FromBody] CategoryByRace categoryByRace)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_CATEGORY_BY_RACE";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            new SqlParameter("@idRace", categoryByRace.idRace),
            new SqlParameter("@nameCategory", categoryByRace.nameCategory)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
        //Get race by  vategory
        [HttpGet("ByCategory/{nameCategory}")]
        public async Task<IActionResult> GetRaceBySportman(string nameCategory)
        {
            // Ensure the name of the stored procedure is correct
            string storedProcedureName = "SP_CATEGORY_BY_RACE";

            // Create the parameters for the stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@usernameSportman", nameCategory)
            };

            // Execute the stored procedure and retrieve the list of SportmanByChallengeModel objects
            List<SponsorByRace> sponsorByRace = await _sqlServerConnector.ExecuteStoredProcedureListAsync<SponsorByRace>(storedProcedureName, parameters);

            // Return the list of challenges
            return Ok(sponsorByRace);
        }

        //Get category by idRace
        [HttpGet("ByRace/{idRace}")]
        public async Task<IActionResult> GetSportmanByRace(int idRace)
        {
            // Ensure the name of the stored procedure is correct
            string storedProcedureName = "SP_CATEGORY_BY_RACE";

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
