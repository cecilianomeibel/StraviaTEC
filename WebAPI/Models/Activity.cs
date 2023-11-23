using System.Globalization;

namespace WebAPI.Models
{
    public class Activity
    {
        public int id { get; set; }
        public string activityType { get; set; }
        public DateTime dateAndTime { get; set; }
        public int mileage { get; set; }
        public string gpx { get; set; }
        public string eventType { get; set; } //(race, challenge, personal)
        public string duration { get; set; }

    }
}
