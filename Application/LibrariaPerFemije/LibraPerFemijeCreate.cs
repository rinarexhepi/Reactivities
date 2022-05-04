
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaPerFemije
{
    public class LibraPerFemijeCreate
    {
        public class Command : IRequest
        {
            public LibraPerFemije LibraPerFemije { get; set; }
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
                _context.LibraPerFemije.Add(request.LibraPerFemije);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
