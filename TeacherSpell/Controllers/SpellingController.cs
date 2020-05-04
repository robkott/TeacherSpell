using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeacherSpell.Models;

namespace TeacherSpell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpellingController : ControllerBase
    {
        [HttpGet("Validate/{value}")]
        public WordInfo Validate(string value)
        {
            return new WordInfo()
                   {
                       Word = value,
                       Meaning = "blargh!"
                   };
        }
    }
}