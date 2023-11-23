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
    public class SportmanMemberGroupController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public SportmanMemberGroupController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSportmanMemberGroup()
        {
            string storedProcedureName = "SP_SPORTMAN_MEMBER_GROUP_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "ReadAll"),
               
            };

            List<SportmanMemberGroup> sportmanMemberGroup = await _sqlServerConnector.ExecuteStoredProcedureListAsync<SportmanMemberGroup>(storedProcedureName, parameters);
            return Ok(sportmanMemberGroup);
        }


        [HttpGet("{nameGroup}")]
        public async Task<IActionResult> GetSportmanMemberGroup(string nameGroup)
        {
            // Asegúrate de que el nombre del stored procedure sea correcto
            string storedProcedureName = "SP_SPORTMAN_MEMBER_GROUP_CRUD";

            // Crea los parámetros necesarios para el stored procedure
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "ReadOnlyOne"),
                new SqlParameter("@nameGroup", nameGroup)

            };

            // Ejecuta el stored procedure y devuelve la Activity con el id proporcionado
            SportmanMemberGroup sportmanMemberGroup = await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<SportmanMemberGroup>(storedProcedureName, parameters);

            if (sportmanMemberGroup == null)
            {
                return NotFound();
            }
            return Ok(sportmanMemberGroup);
        }


        [HttpPost]
        public async Task<IActionResult> CreateSportmanMemberGroup([FromBody] SportmanMemberGroup sportmanMemberGroup)
        {
            string storedProcedureName = "SP_SPORTMAN_MEMBER_GROUP_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "Create"),
                new SqlParameter("@nameGroup", sportmanMemberGroup.nameGroup),
                new SqlParameter("@usernameSportman", sportmanMemberGroup.usernameSportman)
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpPut("{nameGroup}/{usernameSportman}")]
        public async Task<IActionResult> UpdateSportmanMemberGroup(string nameGroup, string usernameSportman, [FromBody] SportmanMemberGroup sportmanMemberGroup)
        {
            string storedProcedureName = "SP_SPORTMAN_MEMBER_GROUP_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "Update"),
                new SqlParameter("@nameGroup", nameGroup),
                new SqlParameter("@usernameSportman", usernameSportman),
                new SqlParameter("@newUserNameSportman", sportmanMemberGroup.usernameSportman),
                new SqlParameter("@newNameGroup", sportmanMemberGroup.nameGroup)
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpDelete("{nameGroup}/{usernameSportman}")]
        public async Task<IActionResult> DeleteSportmanMemberGroup(string nameGroup, string usernameSportman)
        {
            string storedProcedureName = "SP_SPORTMAN_MEMBER_GROUP_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "Delete"),
                new SqlParameter("@nameGroup", nameGroup),
                new SqlParameter("@usernameSportman", usernameSportman)
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }
    }
}