
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaPublikime
{
    public class PublikimeCreate
    {
        public class Command : IRequest
        {
            public Publikime Publikime { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Publikime.Add(request.Publikime);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}

