

using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaRevista
{
    public class RevistaCreate
    {
        public class Command : IRequest
        {
            public Revista Revista { get; set; }
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
                _context.Revista.Add(request.Revista);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
