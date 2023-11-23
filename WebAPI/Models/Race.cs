namespace WebAPI.Models
{
    public class Race
    {
        public int id {  get; set; }
        public int idActivity { get; set; }
        public string activityType { get; set; }

        public int cost { get; set; }
        public string bankAccount { get; set; }
        public string name { get; set; }

        public string access {  get; set; }

    }
}
