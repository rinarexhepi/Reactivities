

using Domain;
using MediatR;
using Persistence;

namespace Application.ContactUs
{
    public class KontaktiCreate
    {
        public class Command : IRequest
        {
            public Kontakti Kontakti { get; set; }
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
                _context.Kontakti.Add(request.Kontakti);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
