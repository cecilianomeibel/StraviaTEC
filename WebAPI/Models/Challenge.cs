namespace WebAPI.Models
{
    public class Challenge
    {
        public int id { get; set; }
        public string activityType { get; set; }
        public string name { get; set; }
        public DateTime period { get; set; }
        public string type { get; set; }
        public string access { get; set; }
    }

}
