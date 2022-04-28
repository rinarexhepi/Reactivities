using Domain;
using MediatR;
using Persistence;

namespace Application.Country
{
    public class Create
    {
        public class Command : IRequest
        {
            public Shteti Shteti { get; set; }
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
                _context.Shteti.Add(request.Shteti);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}
