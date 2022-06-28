using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaTeReja
{
    public class LibraTeRinjCreate
    {
        public class Command : IRequest
        {
            public LibraTeRinj LibraTeRinj { get; set; }
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
                _context.LibraTeRinj.Add(request.LibraTeRinj);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
