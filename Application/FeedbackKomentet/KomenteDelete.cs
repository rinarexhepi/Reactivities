
using MediatR;
using Persistence;

namespace Application.FeedbackKomentet
{
    public class KomenteDelete
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
                var komenti = await _context.Komente.FindAsync(request.ID);

                _context.Remove(komenti);

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}
