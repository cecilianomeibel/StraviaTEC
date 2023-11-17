using System.Globalization;

namespace WebAPI.Models
{
    public class Activity
    {
        public int id { get; set; }
        public string idSportman { get; set; }
        public string activityName { get; set; }
        public DateTime dateAndTime { get; set; }
        public int mileage { get; set; }
        public string gpx { get; set; }
        public string eventType { get; set; }
        public string duration { get; set; }

    }
}
