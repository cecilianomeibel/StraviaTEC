namespace WebAPI.Utils;

using System.Data;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;

public class SqlServerConnector
{
    private readonly string _connectionString;

    public SqlServerConnector(string connectionString)
    {
        _connectionString = connectionString;
    }
    public async Task<List<T>> ExecuteQueryAsync<T>(string query) where T : new()
    {
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            await connection.OpenAsync();
            using (SqlCommand command = new SqlCommand(query, connection))
            {
                using (SqlDataAdapter adapter = new SqlDataAdapter(command))
                {
                    DataTable dataTable = new DataTable();
                    await Task.Run(() => adapter.Fill(dataTable));

                    // Convertir DataTable a lista de modelos
                    List<T> resultList = new List<T>();
                    foreach (DataRow row in dataTable.Rows)
                    {
                        T model = new T();

                        foreach (DataColumn col in dataTable.Columns)
                        {
                            var property = typeof(T).GetProperty(col.ColumnName);
                            if (property != null && row[col] != DBNull.Value)
                            {
                                property.SetValue(model, row[col]);
                            }
                        }

                        resultList.Add(model);
                    }

                    return resultList;
                }
            }
        }
    }


    public async Task ExecuteStoredProcedureAsync<T>(string storedProcedureName, SqlParameter[] parameters) where T : new()
    {
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            await connection.OpenAsync();
            using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddRange(parameters);
                await command.ExecuteNonQueryAsync();
            }
        }
    }

}

