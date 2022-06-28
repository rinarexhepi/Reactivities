

using Application.Autoret;
using Application.Libraria;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AutoriController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Autori>>> GetAutoret()
        {
            return await Mediator.Send(new AutoriList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Autori>> GetAutoriById(int id)
        {
            return await Mediator.Send(new AutoriById.Query { ID = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateAutori(Autori autori)
        {
            return Ok(await Mediator.Send(new AutoriCreate.Command { Autori = autori }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAutori(int id, Autori autori)
        {
            autori.ID = id;

            return Ok(await Mediator.Send(new AutoriEdit.Command { Autori = autori }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAutori(int id)
        {
            return Ok(await Mediator.Send(new AutoriDelete.Command { ID = id }));
        }

    }
}
