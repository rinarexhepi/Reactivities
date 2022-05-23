using MediatR;
using Persistence;

namespace Application.LibrariaTekste
{
    public class TeksteDelete
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
                var teksti = await _context.Tekste.FindAsync(request.ID);

                _context.Remove(teksti);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
