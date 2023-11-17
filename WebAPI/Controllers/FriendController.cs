using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FriendController : ControllerBase
    {


        private readonly SqlServerConnector _sqlServerConnector;

        public FriendController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }



        [HttpPost]
        public async Task<IActionResult> CreateFriend([FromBody] SportmanFriendSportman friend)
        {
            string storedProcedureName = "SP_FRIEND_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@statementType", "CREATE"),
                new SqlParameter("@idSportman", friend.idSportman),
                new SqlParameter("@idFriend", friend.idFriend),
            };

            await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);
            return Ok();
        }

        [HttpDelete("{idSportman}/{idFriend}")]
        public async Task<IActionResult> DeleteFriend(string idSportman, string idFriend)
        {
            try
            {
                string storedProcedureName = "SP_FRIEND_CRUD";

                SqlParameter[] parameters = new SqlParameter[]
                {
                    new SqlParameter("@statementType", "DELETE"),
                    new SqlParameter("@idSportman", idSportman),
                    new SqlParameter("@idFriend", idFriend),
                };

                await _sqlServerConnector.ExecuteStoredProcedureSingleAsync<object>(storedProcedureName, parameters);

                return Ok("Deleted successfully");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

    }
}
