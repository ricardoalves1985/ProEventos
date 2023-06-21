using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        public EventController()
        {

        }

        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return new Event[]
            {
               new Event()
               { EventId = 1,
                Theme = "Angular 11",
                Local = "BH",
                Lote = "1",
                PeopleCount = "250",
                EventDate = DateTime.Now.AddDays(2).ToString()
               }
            };
        }
    }
}

