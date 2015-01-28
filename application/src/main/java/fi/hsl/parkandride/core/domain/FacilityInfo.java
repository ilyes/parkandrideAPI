package fi.hsl.parkandride.core.domain;

import static com.google.common.collect.Maps.newHashMap;
import static fi.hsl.parkandride.core.domain.FacilityStatus.IN_OPERATION;

import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.geolatte.geom.Polygon;

import com.wordnik.swagger.annotations.ApiModelProperty;

import fi.hsl.parkandride.core.domain.validation.NotNullElement;

public class FacilityInfo implements OperatorEntity {

    public Long id;

    @ApiModelProperty(required = true)
    @NotNull
    @Valid
    public MultilingualString name;

    @ApiModelProperty(required = true)
    @NotNull
    public Polygon location;

    @ApiModelProperty(required = true)
    @NotNull
    public Long operatorId;

    @ApiModelProperty(required = true)
    @NotNull
    public FacilityStatus status = IN_OPERATION;

    @NotNullElement
    @NotNull
    public Map<CapacityType, Integer> builtCapacity = newHashMap();

    public NullSafeSortedSet<Usage> usages = new NullSafeSortedSet<>();

    public Long operatorId() {
        return operatorId;
    }

}
