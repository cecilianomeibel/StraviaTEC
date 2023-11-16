using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SponsorController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public SponsorController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllSponsor()
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPONSOR_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadAll"),
            new SqlParameter("@sponsorName", DBNull.Value)  // Agrega un parámetro @sponsorName con un valor predeterminado
            };

            // Ejecuta el stored procedure y devuelve la lista de Sponsor
            List<Sponsor> sponsor = await _sqlServerConnector.ExecuteStoredProcedureListAsync<Sponsor>(storedProcedureName, parameters);
            return Ok(sponsor);
        }

        [HttpGet("{sponsorName}")]
        public async Task<IActionResult> GetSponsorByName(string sponsorName)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPONSOR_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "ReadOnlyOne"),
            new SqlParameter("@sponsorName", sponsorName)
            };

            // Ejecuta el stored procedure y devuelve el Sponsor con el name proporcionado
            Sponsor sponsor = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<Sponsor>(storedProcedureName, parameters);

            if (sponsor == null)
            {
                return NotFound();
            }
            return Ok(sponsor);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSponsor([FromBody] Sponsor sponsor)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPONSOR_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Create"),
            new SqlParameter("@sponsorName", sponsor.sponsorName),
            new SqlParameter("@representant", sponsor.representant),
            new SqlParameter("@representantPhone", sponsor.representantPhone),
            new SqlParameter("@logo", sponsor.logo)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

       

        [HttpPut("{sponsorName}")]
        public async Task<IActionResult> UpdateSponsor(string sponsorName, [FromBody] Sponsor sponsor)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPONSOR_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Update"),
            new SqlParameter("@sponsorName", sponsorName),
            new SqlParameter("@representant", sponsor.representant),
            new SqlParameter("@representantPhone", sponsor.representantPhone),
            new SqlParameter("@logo", sponsor.logo)

            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpDelete("{sponsorName}")]
        public async Task<IActionResult> DeleteSponsor(string sponsorName)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPONSOR_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
            new SqlParameter("@statementType", "Delete"),
            new SqlParameter("@sponsorName", sponsorName)
            };

            // Ejecuta el stored procedure y devuelve la respuesta
            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
    }
}
