
using Persistence;
using MediatR;

namespace Application.LibrariaPublikime
{
    public class PublikimeDelete
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
                var publikimi = await _context.Publikime.FindAsync(request.ID);

                _context.Remove(publikimi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}