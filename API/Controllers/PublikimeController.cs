
using Application.LibrariaPublikime;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PublikimeController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Publikime>>> GetPublikime()
        {
            return await Mediator.Send(new PublikimeList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Publikime>> GetPublikimeId(int id)
        {
            return await Mediator.Send(new PublikimeById.Query { ID = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreatePublikime(Publikime publikime)
        {
            return Ok(await Mediator.Send(new PublikimeCreate.Command { Publikime = publikime }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPublikime(int id, Publikime publikime)
        {
            publikime.ID = id;
            return Ok(await Mediator.Send(new PublikimeEdit.Command { Publikime = publikime }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublikime(int id)
        {
            return Ok(await Mediator.Send(new PublikimeDelete.Command { ID = id }));
        }

    }
}
