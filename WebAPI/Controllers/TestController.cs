using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Utils;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly SqlServerConnector _sqlServerConnector;

        public TestController(SqlServerConnector sqlServerConnector)
        {
            _sqlServerConnector = sqlServerConnector;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sportsman>>> ObtenerDatos()
        {
            // Ejemplo de consulta asincrónica
            string query = "SELECT * FROM SPORTMAN";
            var result = await _sqlServerConnector.ExecuteQueryAsync<Sportsman>(query);

            // ... hacer algo con el resultado ...

            return Ok(result);
        }
    }
}
