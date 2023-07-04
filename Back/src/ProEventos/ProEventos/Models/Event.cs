using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Models
{
    public class Event
    { 
        public int EventId { get; set; }
        public string Local { get; set; }
        public string EventDate { get; set; }
        public string Theme { get; set; }
        public string PeopleCount { get; set; }
        public string Lote { get; set; }
        public string URLImage { get; set; }
       
    }
}
