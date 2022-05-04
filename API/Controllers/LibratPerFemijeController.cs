using Application.LibrariaPerFemije;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class LibratPerFemijeController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<LibraPerFemije>>> GetLibratPerFemije()
        {
            return await Mediator.Send(new LibratPerFemijeList.Query());
        } 

        [HttpGet("{id}")]
        public async Task<ActionResult<LibraPerFemije>> GetLibriPerFemije(int id)
        {
            return await Mediator.Send(new LibratPerFemijeById.Query { ID = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateLibraPerFemije(LibraPerFemije libraPerFemije)
        {
            return Ok(await Mediator.Send(new LibraPerFemijeCreate.Command { LibraPerFemije = libraPerFemije}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditLibraPerFemije(int id, LibraPerFemije libraPerFemije)
        {
            libraPerFemije.ID = id;
            return Ok(await Mediator.Send(new LibraPerFemijeEdit.Command { LibraPerFemije = libraPerFemije }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLibraPerFemije(int id)
        {
            return Ok(await Mediator.Send(new LibraPerFemijeDelete.Command { ID = id }));
        }
    }
}
