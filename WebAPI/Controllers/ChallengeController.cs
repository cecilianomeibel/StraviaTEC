using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChallengeController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public ChallengeController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        //Create Challenge
        [HttpPost]
        public async Task<IActionResult> CreateChallenge([FromBody] Challenge challenge)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_CHALLENGE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            new SqlParameter("@activityName", challenge.activityName),
            new SqlParameter("@name", challenge.name),
            new SqlParameter("@period", challenge.period),
            new SqlParameter("@type", challenge.type),
            new SqlParameter("@access", challenge.access)

            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        //Get All Challenges
        [HttpGet]
        public async Task<IActionResult> GetAllChallenges()
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_CHALLENGE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadAll"),
            };

            // Ejecuta el stored procedure y devuelve la lista de Sportmen
            List<Challenge> challenges = await _sqlServerConnector.ExecuteStoredProcedureListAsync<Challenge>(storedProcedureName, parameters);
            return Ok(challenges);
        }

        //Get Challenge by ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetChallengeByID(int id)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_CHALLENGE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@id", id)
            };

            // Ejecuta el stored procedure y devuelve el Challenge con el id proporcionado
            Challenge challenge = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<Challenge>(storedProcedureName, parameters);

            if (challenge == null)
            {
                return NotFound();
            }
            return Ok(challenge);
        }

        //Update Challenge
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateChallenge(int id, [FromBody] Challenge challenge)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_CHALLENGE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Update"),
            new SqlParameter("@id", id),
            new SqlParameter("@activityName", challenge.activityName),
            new SqlParameter("@name", challenge.name),
            new SqlParameter("@period", challenge.period),
            new SqlParameter("@type", challenge.type),
            new SqlParameter("@access", challenge.access)

            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        //Delete Challenge
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChallenge(int id)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_CHALLENGE_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Delete"),
            new SqlParameter("@id", id)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }


    }
}




