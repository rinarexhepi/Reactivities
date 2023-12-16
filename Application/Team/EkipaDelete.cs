using MediatR;
using Persistence;

namespace Application.Team
{
    public class EkipaDelete
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
                var ekipa = await _context.Ekipa.FindAsync(request.ID);

                _context.Remove(ekipa);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}