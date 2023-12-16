using Domain;
using MediatR;
using Persistence;

namespace Application.Team
{
    public class EkipaCreate
    {
        public class Command : IRequest
        {
            public Ekipa Ekipa { get; set; }
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
                _context.Ekipa.Add(request.Ekipa);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
