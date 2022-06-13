
using MediatR;
using Persistence;

namespace Application.LibrariaPerFemije
{
    public class LibraPerFemijeDelete
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
                var libriPerFemije = await _context.LibraPerFemije.FindAsync(request.ID);

                _context.Remove(libriPerFemije);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
