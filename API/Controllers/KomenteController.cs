
using Application.FeedbackKomentet;
using Application.Libraria;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class KomenteController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Komente>>> GetKomente()
        {
            return await Mediator.Send(new KomenteList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Komente>> GetKomenteById(int id)
        {
            return await Mediator.Send(new KomenteById.Query { ID = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateKomente(Komente komente)
        {
            return Ok(await Mediator.Send(new KomenteCreate.Command { Komente = komente }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditKomente(int id, Komente komente)
        {
            komente.ID = id;

            return Ok(await Mediator.Send(new KomenteEdit.Command { Komente = komente }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKomente(int id)
        {
            return Ok(await Mediator.Send(new KomenteDelete.Command { ID = id }));
        }

    }
}
