package ma.enova.easystock.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.enova.easystock.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "produit")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="produit_seq",sequenceName="produit_seq",allocationSize=1, initialValue = 1)
public class ProduitHistory extends HistBusinessObject  {


    public ProduitHistory() {
    super();
    }

    public ProduitHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="produit_seq")
    public Long getId() {
    return id;
    }
}

