using MediatR;
using Persistence;

namespace Application.LibrariaRevista
{
    public class RevistaDelete
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
                var revista = await _context.Revista.FindAsync(request.ID);

                _context.Remove(revista);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
