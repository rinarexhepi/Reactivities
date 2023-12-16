

using Application.Team;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EkipaController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Ekipa>>> GetEkipen()
        {
            return await Mediator.Send(new EkipaList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Ekipa>> GetEkipaById(int id)
        {
            return await Mediator.Send(new EkipaById.Query { ID = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateEkipa(Ekipa ekipa)
        {
            return Ok(await Mediator.Send(new EkipaCreate.Command { Ekipa = ekipa }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditEkipa(int id, Ekipa ekipa)
        {
            ekipa.ID = id;

            return Ok(await Mediator.Send(new EkipaEdit.Command { Ekipa = ekipa }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEkipa(int id)
        {
            return Ok(await Mediator.Send(new EkipaDelete.Command { ID = id }));
        }

    }
}
