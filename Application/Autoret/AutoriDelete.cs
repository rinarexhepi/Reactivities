using MediatR;
using Persistence;

namespace Application.Autoret
{
    public class AutoriDelete
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
                var autori = await _context.Autori.FindAsync(request.ID);

                _context.Remove(autori);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}