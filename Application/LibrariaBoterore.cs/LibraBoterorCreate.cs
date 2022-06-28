
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaBoterore
{
    public class LibraBoterorCreate
    {
        public class Command : IRequest
        {
            public LibraBoteror LibraBoteror { get; set; }
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
                _context.LibraBoteror.Add(request.LibraBoteror);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
