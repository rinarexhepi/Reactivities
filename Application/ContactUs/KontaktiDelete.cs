
using MediatR;
using Persistence;

namespace Application.ContactUs
{
    public class KontaktiDelete
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
                var kontakt = await _context.Kontakti.FindAsync(request.ID);

                _context.Remove(kontakt);

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}
