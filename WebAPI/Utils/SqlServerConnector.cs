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
    public async Task<List<T>> ExecuteQueryListAsync<T>(string query) where T : new()
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

    public async Task<T> ExecuteQuerySingleAsync<T>(string query) where T : new()
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

                    if (dataTable.Rows.Count > 0)
                    {
                        DataRow row = dataTable.Rows[0];
                        T model = new T();

                        foreach (DataColumn col in dataTable.Columns)
                        {
                            var property = typeof(T).GetProperty(col.ColumnName);
                            if (property != null && row[col] != DBNull.Value)
                            {
                                property.SetValue(model, row[col]);
                            }
                        }

                        return model;
                    }

                    return default(T);
                }
            }
        }
    }


    public async Task<List<T>> ExecuteStoredProcedureListAsync<T>(string storedProcedureName, SqlParameter[] parameters) where T : new()
    {
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            await connection.OpenAsync();
            using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddRange(parameters);

                using (SqlDataReader reader = await command.ExecuteReaderAsync())
                {
                    List<T> result = new List<T>();

                    while (await reader.ReadAsync())
                    {
                        T item = new T();
                        var properties = typeof(T).GetProperties();

                        foreach (var property in properties)
                        {
                            string columnName = property.Name; 

                            if (reader[columnName] != DBNull.Value)
                            {
                                property.SetValue(item, reader[columnName]);
                            }
                        }
                        result.Add(item);
                    }

                    return result;
                }
            }
        }
    }

    public async Task<T> ExecuteStoredProcedureSingleAsync<T>(string storedProcedureName, SqlParameter[] parameters) where T : new()
    {
        using (SqlConnection connection = new SqlConnection(_connectionString))
        {
            await connection.OpenAsync();
            using (SqlCommand command = new SqlCommand(storedProcedureName, connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddRange(parameters);

                using (SqlDataReader reader = await command.ExecuteReaderAsync())
                {
                    if (await reader.ReadAsync())
                    {
                        T item = new T();

                        var properties = typeof(T).GetProperties();

                        foreach (var property in properties)
                        {
                            string columnName = property.Name; 
                            if (reader[columnName] != DBNull.Value)
                            {
                                property.SetValue(item, reader[columnName]);
                            }
                        }

                        return item;
                    }
                }
            }

            return default(T);
        }
    }
}

