using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaTekste
{
    public class TeksteCreate
    {
        public class Command : IRequest
        {
            public Tekste Tekste { get; set; }
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
                _context.Tekste.Add(request.Tekste);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
