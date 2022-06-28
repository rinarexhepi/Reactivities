
using MediatR;
using Persistence;

namespace Application.LibrariaBoterore
{
    public class LibraBoterorDelete
    {
        public class Command : IRequest
        {
            public int ID { get; set; }
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
                var libriBoteror = await _context.LibraBoteror.FindAsync(request.ID);

                _context.Remove(libriBoteror);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
