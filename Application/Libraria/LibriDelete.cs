using MediatR;
using Persistence;

namespace Application.Libraria
{
    public class LibriDelete
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
                var libri = await _context.Libri.FindAsync(request.ID);

                _context.Remove(libri);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
