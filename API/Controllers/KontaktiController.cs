
using Application.ContactUs;
using Application.Libraria;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class KontaktiController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Kontakti>>> GetKontakti()
        {
            return await Mediator.Send(new KontaktiList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Kontakti>> GetKontaktiByid(int id)
        {
            return await Mediator.Send(new KontaktiById.Query { ID = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateKontakti(Kontakti kontakt)
        {
            return Ok(await Mediator.Send(new KontaktiCreate.Command { Kontakti = kontakt }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditKontakti(int id, Kontakti kontakt)
        {
            kontakt.ID = id;

            return Ok(await Mediator.Send(new KontaktiEdit.Command { Kontakti = kontakt }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKontakti(int id)
        {
            return Ok(await Mediator.Send(new KontaktiDelete.Command { ID = id }));
        }

    }
}
