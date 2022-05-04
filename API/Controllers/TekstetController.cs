using Application.LibrariaTekste;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TekstetController : BaseApiController
    {
        //Get
        [HttpGet]
        public async Task<ActionResult<List<Tekste>>> GetTekstet()
        {
            return await Mediator.Send(new TeksteList.Query());
        }

        //Get by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Tekste>> GetTeksti(int id)
        {
            return await Mediator.Send(new TeksteById.Query { ID = id });
        }

        //Create
        [HttpPost]
        public async Task<IActionResult> CreateTekste(Tekste tekste)
        {
            return Ok(await Mediator.Send(new TeksteCreate.Command { Tekste = tekste }));
        }

        //Edit
        [HttpPut("{id}")]
        public async Task<IActionResult> EditTekste(int id, Tekste tekste)
        {
            tekste.ID = id;
            return Ok(await Mediator.Send(new TeksteEdit.Command { Tekste = tekste }));
        }



        //Delete
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTekste(int id)
        {
            return Ok(await Mediator.Send(new TeksteDelete.Command { ID = id }));
        }

    }
}
